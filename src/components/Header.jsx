import { IoSearch } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import NavMenu from './NavMenu';
import MenuMobile from "./MenuMobile";
import { useEffect, useRef, useState } from "react";
import ModalSearch from "./ModalSearch";
import BoxLogin from "./BoxLogin"
import { useNavigate } from "react-router-dom";
import useDataContext from "../hook/useDataContext";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [activeMenuMobile, setActiveMenuMobile] = useState(false)
  const [windowScrollY, setWindowScrollY] = useState(0)
  const [activeModalSearch, setActiveModalSearch] = useState(false)
  const [activeBoxLogin, setActiveBoxLogin] = useState(false)
  const navigate = useNavigate()
  const { setHeaderHeight, token, setToken } = useDataContext()

  const headerHeightRef = useRef(null)

  useEffect(() => {

    if (headerHeightRef.current)
      setHeaderHeight(headerHeightRef.current.offsetHeight)


    const windowEventScrollY = window.addEventListener('scroll', () => {
      setWindowScrollY(window.scrollY)
    })

    const windowEventResize = window.addEventListener('resize', () => {
      if (window.innerWidth > 1023) setActiveMenuMobile(false)
      setHeaderHeight(headerHeightRef.current.offsetHeight)
    })
    return () => {
      window.removeEventListener('scroll', windowEventScrollY)
      window.removeEventListener('resize', windowEventResize)
    }
  }, [])
  return (
    <header ref={headerHeightRef} className={`fixed top-0 left-0 right-0 duration-300 ease-linear ${windowScrollY > 1 && 'bg-white shadow-menu'} z-50`}>
      <div className="container mx-auto h-[74px] flex items-center justify-between text-blackText px-4">
        {/* modal search */}
        <ModalSearch {...{ activeModalSearch, setActiveModalSearch }} />
        {/* Menu Mobile */}
        <MenuMobile {...{ activeMenuMobile, setActiveMenuMobile }} />
        {/* box login */}
        <BoxLogin {...{ activeBoxLogin, setActiveBoxLogin }} />

        <div className='lg:hidden cursor-pointer '
          onClick={() => setActiveMenuMobile(true)}>
          <RiMenu2Line size={25} />
        </div>

        <div className='flex items-center gap-[64px]'>
          <div className='brand' onClick={() => navigate('/')} >BieuCBT.</div>
          {/* nav menu */}
          <NavMenu />
        </div>
        <div className='flex items-center gap-10'>
          <div className='maxMd:hidden cursor-pointer'
            onClick={() => setActiveModalSearch(true)}><IoSearch size={25} /></div>
          {
            token ? <div className="">
              <div className="flex items-center gap-5">
                <FaShoppingCart size={30} className="cursor-pointer" />
                <div className="relative group">
                  <span className="cursor-pointer peer">tài khoản</span>
                  <div className="hidden absolute top-full right-0 bg-green-300 group-hover:block w-max
                  cursor-pointer" onClick={() => {
                      localStorage.removeItem('token')
                      setToken('')
                    }}>
                    Đăng xuất
                  </div>
                </div>
              </div>
            </div> :
              <div className='cursor-pointer '
                onClick={() => setActiveBoxLogin(true)}><FaRegUser size={25} /></div>
          }

        </div>
      </div>
    </header>
  )
}

export default Header