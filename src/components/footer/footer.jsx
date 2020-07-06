import React from 'react'
import {Button,Box} from '@material-ui/core'
export const Footer = () => {
    return (
        <Box width="auto" color="white"  height="10vh" bgcolor="black" display="flex" justifyContent="space-between" alignItems="center" >
            <span>  </span>
            <span style={{textTransform:"uppercase"}}>made by tanzeel tasleem</span> 
            <Button>
            <Box bgcolor="white" height="36px" borderRadius="21px">
               <a href="https://github.com/TanzeelTasleem" target="_blank" rel="noopener noreferrer" ><img src="https://image.flaticon.com/icons/svg/37/37318.svg" alt=""/></a>
            </Box>
            </Button>
            
        </Box>
    )
}
