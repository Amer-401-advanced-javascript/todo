import React, {useState} from 'react';

export const SettingContext = React.createContext();

function SettingProvider (props) {
    const [completed, setCompleted] = useState(true);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1)
    const [sortItems, setSortItems] = useState('');

    const state = {
        completed,
        itemsPerPage,
        sortItems,
        currentPage,
        setCompleted,
        setCurrentPage,
        setItemsPerPage,
        setSortItems,
    }
    
    return(
        <SettingContext.Provider value = {state}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingProvider;