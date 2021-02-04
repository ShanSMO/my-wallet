import {buttonStyle} from './ButtonStyles';
import Button from '@material-ui/core/Button';

export function CButton(props: any) {
        return(
                <Button  style={buttonStyle.btn} variant="contained" color="primary">Login</Button >
        );
}