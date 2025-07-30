/**
 * WordPress Imports
 */
const { createBlock } = wp.blocks;
const { Button } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { __ } = wp.i18n;


/**
 * Custom Appender meant to be used when there is only one type of block that can be inserted to an InnerBlocks instance.
 *
 * @param buttonText
 * @param onClick
 * @param clientId
 * @param allowedBlock
 * @param innerBlocks
 * @param {Object} props
 */
const ItemAppender = ( { buttonText = __( 'Add Item' ), onClick, clientId, allowedBlock, blockAttribute, innerBlocks, ...props } ) => {
    return(
        <div className="alpha-add-more-item"><button onClick={ onClick } >+</button></div>
    );
};


export default compose( [
    withSelect( ( select, ownProps ) => {
        return {
            innerBlocks: select( 'core/block-editor' ).getBlock( ownProps.clientId ).innerBlocks
        };
    } ),
    withDispatch( ( dispatch, ownProps ) => {
        return {
            onClick() {
                const newBlock = createBlock( ownProps.allowedBlock, ownProps.blockAttribute );
                dispatch( 'core/block-editor' ).insertBlock( newBlock, ownProps.innerBlocks.length, ownProps.clientId );
            }
        };
    } )
] )( ItemAppender );