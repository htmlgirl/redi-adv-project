const DeleteModal = ({ onConfirm, onCancel }: { onConfirm: () => void, onCancel: () => void }) => {
    return (
        <div className="modal-overlay fixed inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center">
            <div className="modal bg-blue-100 p-6 rounded-lg shadow-xl xl:w-1/3 lg:w-1/2 sm:w-1/1">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Are you sure you want to delete this film?</h3>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-blue-300 text-blue-700 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;


