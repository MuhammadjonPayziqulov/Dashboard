
interface IModalProps {
    onClose: () => void;
    onDelete: () => void;
}

export const Modal: React.FC<IModalProps> = ({ onClose, onDelete }) => {    
    return (
        <div className="modal">
            <div className="modal-content">
                <p>Are you sure you want to delete this user?</p>
                <div className="modal_btn_wrap">
                    <button className="add_btn" onClick={onClose}>Cancel</button>
                    <button className="delete_btn" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}
