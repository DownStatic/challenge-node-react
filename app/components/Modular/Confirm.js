import React from 'react'

const Confirm = props => {
  return(
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Please confirm that you want to delete {props.student.firstname + " " + props.student.surname}</h5>
          </div>
          <div class="modal-footer">
            <button onClick={props.deleteStudent} data-id={props.student._id} type="button" class="btn btn-primary">Confirm Delete</button>
            <button onClick={props.cancelDelete} type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
