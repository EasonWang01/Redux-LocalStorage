# Redux-LocalStorage
easy to implement


#Install
```
npm install redux-simple-localstorage1
```

#Usage

```javascript
import {applyMiddleware,compose,createStore} from "redux"
import reducer from './reducers/index.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { saveStore, initial } from 'redux-simple-localstorage1'

let finalCreateStore = compose(
	applyMiddleware(thunk,logger(),saveStore('reduxStore'))
	)(createStore)

export function configureStore(initialState){

	return finalCreateStore(reducer,initial(initialState))
}

```

#API

```
saveStore('Choose a name for LocalStorage key ')
initial('Just pass the initialState of your application')
```

#Then

```
Your store will be in the LocalStorage
```
