import { CssBaseline } from '@mui/material'
import Notes from './Notes'

const PersonalSection = ({fetch, setFetch}) => {
    return (
        <div>
            <CssBaseline />
            <Notes fetch={fetch} setFetch={setFetch}/>
        </div>
    )
}

export default PersonalSection