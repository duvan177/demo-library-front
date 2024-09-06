import { EXPLORER_HOME } from '@/routes/paths/all-paths';
import { isOpenSidebarAtom } from '@/store/menuAtom';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Sidebar = () => {
  //const [isOpen, setIsOpen] = useState(false);
  const isOpen = useAtomValue(isOpenSidebarAtom)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate()

  const handleItemClick = (index: number, path: string) => {
    setActiveIndex(index);
    navigate(path)
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        {[
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-grid-alt', name: 'Dashboard' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-search', name: 'Explorador' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-book-open', name: 'Aprendizaje' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-user', name: 'Perfil' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-bullseye', name: 'Objetivos' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-heart', name: 'Comunidad' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-loader-circle', name: 'Evaluaciones' },
          { navigateTo: EXPLORER_HOME, icon: 'bx bx-briefcase-alt', name: 'Oferta' },
        ].map((item, index) => (
          <li
            key={index}
            className={`li ${activeIndex === index ? 'activo' : ''}`}
          //onClick={() => handleItemClick(index, EXPLORER_HOME)}
          >
            {/*<a href={item.navigateTo}>*/}
            <a href="/explorer">
              <i className={item.icon}></i>
              <span className="links_name">{item.name}</span>
            </a>
            <span className="tooltip">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

