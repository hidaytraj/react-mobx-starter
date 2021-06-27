# mobx with react

## store
Is used to create a model and actions for data


## access in react


## useContext
Help to share store directly in any component

### `useObserver`


`useObserver` is required to watch and update changes between states

`import { useObserver } from "mobx-react";`

**how to use**
```
 return useObserver(() => (
        <>
            <h2> Playing or accessing store
        </>
    ))
```
after above snippet every bit of changes will reflect in this component

*Note* I have used `observer` in `NoteList` file