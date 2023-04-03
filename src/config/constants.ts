import InboxLogo from '../assets/InboxLogo.png'
import DraftLogo from '../assets/DraftLogo.png'
import SentLogo from '../assets/SentLogo.png'
import MoveToSpamLogo from '../assets/MoveToSpam.png'
import DeletedLogo from '../assets/DeleteCategoryButtonLogo.png'

export const BACKEND_URL = 'http://localhost'
export const BACKEND_PORT = 5000;

export const mainDirectoriesLeftPanel = [{name: 'Входящие', id: 1, logo: InboxLogo}, {
    name: 'Отправленные', id: 2, logo:SentLogo}, {name:'Черновики', id: 3, logo:DraftLogo},
    {name: 'Удаленные', id: 4, logo: DeletedLogo}, {name: 'Спам', id: 5, logo: MoveToSpamLogo},
 ]

 export const  mainDirectoriesMiddlePanel = [{name: 'Входящие', id: 1}, {
    name: 'Отправленные', id: 2}, {name:'Черновики', id: 3}]
