import {Alert, Link, Typography, type AlertProps} from '@mui/material'
import {type FC} from 'react'

const LargeAmountWarning: FC<AlertProps> = ({sx, ...props}) => {
  return (
    <Alert
      icon={false}
      severity="info"
      sx={[{border: 'none'}, ...(Array.isArray(sx) ? (sx as any) : [sx])]}
      {...props}
    >
      <Typography variant="body2" component="span">
        Please use{' '}
        <Link
          href="https://subbridge-293nhwvpk-phala.vercel.app/"
          target="_blank"
        >
          <b>the old version</b>
        </Link>{' '}
        for large amount transfers.
      </Typography>
    </Alert>
  )
}

export default LargeAmountWarning
