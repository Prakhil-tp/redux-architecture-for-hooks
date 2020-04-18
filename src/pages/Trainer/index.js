import React from 'react'
import connect from 'utils/connect'

const Trainer = props => {
  console.log(props.Trainer)
  return (
    <div>
      <span>Trainer</span>
    </div>
  )
}

const mapStateToProps = store => ({
  Trainer: store.Trainer
})
const mapDispatchToProps  = () => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Trainer)
