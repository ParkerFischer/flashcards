

import {deleteCard} from '../../utils/api'



export default function handleDeleteCard(id) {
  
    let result = window.confirm(
      "Delete this Card? \n \n You will not be able to recover it."
    );
    if (result) deleteCard(id);
  }