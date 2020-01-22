/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ title, paragrph}) => (
    <article
    sx={{
        margin : '10px'

    }}
    >
    <h3
    sx={{textDecorationLine: 'underline', textDecorationColor:'trim', textUnderlineOffset:'5px'}}
    >{title}</h3>
    <p>{paragrph}</p>
    </article>
)
