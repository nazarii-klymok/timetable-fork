import { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckMarkIcon from '../assets/CheckMarkIcon';
import HeartIcon from '../assets/HeartIcon';
import RemoveIcon from '../assets/RemoveIcon';
import TimetableManager from '../utils/TimetableManager'; 
import { CachedTimetable } from '../utils/types';
import styles from './SavedMenu.module.scss';

const MAX_SAVED_ITEMS = 5;

const SavedMenu = ({likable}: { likable?: boolean}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [savedGroups, setSavedGroups] = useState<string[]>(getCachedGroups());
  const [isLiked, setIsLiked] = useState(false);

  function getCachedGroups() {
    return TimetableManager.getCachedTimetables().map((item: CachedTimetable) => item.group);
  }

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  const deleteItem = (index: number) => {
    console.log('delete item', index, savedGroups[index]);

    TimetableManager.deleteTimetable(savedGroups[index]).then(
      () => setSavedGroups(getCachedGroups())
    );
  };

  const likeItem = () => {
    setIsLiked(!isLiked);
    setSavedGroups(getCachedGroups());
  };
  
  return (
    <div className={styles.saved}
      onMouseEnter={openMenu}  onMouseLeave={closeMenu} 
      onFocusCapture={openMenu} onBlur={closeMenu} 
    >
      <button style={{background: "transparent", border: 0}} onClick={likeItem}>
        <HeartIcon liked={likable && isLiked}/>
      </button>
      {isMenuOpen &&
        <div className={styles['saved-menu']}>
          <span>{savedGroups.length !== 0 ? "Saved" : "No saved items. Open any timetable to automatically save it."}</span>
          <ul>
            {savedGroups.slice(savedGroups.length - 1 - MAX_SAVED_ITEMS, MAX_SAVED_ITEMS).map((group, index) => (
              // TODO: add arrow navigation and data attributes?
              <li key={index}>
                <Link to={`/${group}`}> 
                  <span>{group} {index === 0 ? <CheckMarkIcon className={styles['check-mark']}/> : null}</span> 
                </Link>
                <RemoveIcon onClick={() => deleteItem(index)} className={styles.remove}/>
              </li>
            ))} 
          </ul>
        </div>
      }
    </div>
  );
};

export default SavedMenu;


