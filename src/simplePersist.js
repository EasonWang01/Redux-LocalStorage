exports.saveStore = (StorageName) => {
  return ({ dispatch, getState }) => next => action => {
	   next(action);
		 let StoreItem = getState();
     let FinalStoreItem = JSON.stringify(StoreItem)
		 localStorage.setItem(StorageName,FinalStoreItem);
  };
}

exports.initial = (initialState) => {
	if (typeof localStorage === 'undefined') {
		return initialState;
	} else {
		if (localStorage.getItem('reduxStore') === null){
			return initialState;
		} else {
			return JSON.parse(localStorage.getItem('reduxStore'));
		}
	}
}
