import { useState, type FC } from 'react'
import './Sidebar.scss'
import { cartIcon, logoutIcon, menuIcon, userIcon, userPhoto } from "../../utils/img"
import { NavLink } from "react-router-dom"
import CustomButton from "../UI/CustomButton"
import Modal from "../Modal/Modal"
import { useUser } from "../../store/useUser"
import Sidebarskeleton from "./Sidebarskeleton"

const links = [
  { name: 'Меню', url: '/', icon: menuIcon },
  { name: 'Корзина', url: '/cart', icon: cartIcon },
  { name: 'Профиль', url: '/profile', icon: userIcon },
]

const Sidebar: FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useUser()

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const logout = () => {
    closeModal()
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    window.location.href = '/login'
  }


  return (
    <>
      <div className="sidebar">
        {user ? (
          <>
            <div className="sidebar__block">
              <div className="sidebar__user">
                <img src={userPhoto} alt="" className="sidebar__user-img" />
                <h2 className="sidebar__user-name">
                  {user.username}
                </h2>
                <a href={`mailto:${user.email}`} className="sidebar__user-email">
                  {user.email}
                </a>
              </div>
              <ul className="sidebar__list">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink to={link.url} className="sidebar__list-link">
                      <img src={link.icon} alt="" />
                      <span className="sidebar__list-link-span">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <CustomButton
              width={117}
              height={43}
              text="Выйти"
              icon={logoutIcon}
              gap={9}
              click={openModal}
            />
          </>
        ) :  <Sidebarskeleton/> }

      </div>
      {isModalOpen && <Modal closeModal={closeModal} logout={logout} />}
    </>
  )
}

export default Sidebar