import { useSelect } from '@wordpress/data';

const ImageLoad = ({ attachmentId }) => {
    const image = useSelect((select) =>
        attachmentId
            ? select('core').getMedia(attachmentId)
            : null,
        [attachmentId]
    );

    if (!image) {
        return <p>Loading image details...</p>;
    }

    return (
        <div>
            <img src={image.source_url} alt={image.alt_text} height={100} width={"auto"} />
        </div>
    );
};

export default ImageLoad;
