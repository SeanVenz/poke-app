import { Button } from "react-bootstrap";

export const Btn = (props) => {

    const {onClick, string, variant, size} = props

    return(
        <Button size = {size} variant={variant} onClick={onClick}>{string}</Button>
    )
}