import '../Styles/ProjectInfo.css';

interface ProjectInfoProps {
    onClose: () => void;
}
const ProjectInfo: React.FC<ProjectInfoProps> = ({onClose}) => {
    return (
        <div className="popup">
            <span className="close" onClick={onClose}>&times;</span>
            <div className="popup-content">
                {/* Your popup content goes here */}
            </div>
        </div>
    );
}

export default ProjectInfo