import React from 'react'

const Confirm = props => {
  return(
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Please confirm that you want to delete</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Confirm Delete</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
