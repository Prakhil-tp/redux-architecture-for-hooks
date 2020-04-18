import React from 'react'
import connect from 'utils/connect'

const Participant = props => {
  console.log(props.Participant)
  return (
    <div>
      <span>Participant</span>
    </div>
  )
}

const mapStateToProps = store => ({
  Participant: store.Trainer
})
const mapDispatchToProps  = () => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Participant)
