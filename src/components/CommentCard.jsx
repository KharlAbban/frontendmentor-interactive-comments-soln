import React, { useState } from 'react'
import { useCommentsContext } from '../contexts/CommentsContext'
import CommentHeader from './CommentHeader';
import CommentVotes from './CommentVotes';
import CommentContent from './CommentContent';
import ActionButtons from './ActionButtons';
import AddComment from './AddComment';
import DeleteModal from './DeleteModal';

const CommentCard = ({id, content, createdAt, score, user, replyingTo, parentId}) => {
    const {commentsDispatch} = useCommentsContext();
    const [commentState, setCommentState] = useState("normal");

    const handleVoteIncrease = () => {
        commentsDispatch({
            type: "increase_score",
            by: 1,
            id,
            parentId,
            isReply: parentId !== undefined
        })
    }
    const handleVoteDecrease = () => {
        commentsDispatch({
            type: "decrease_score",
            by: -1,
            id,
            parentId,
            isReply: parentId !== undefined
        })
    }
    const handleEditedComment = (updatedContent) => {

        commentsDispatch({
            type: "update_comment",
            isReply: parentId !== undefined,
            parentId,
            id,
            updatedContent
        })

        handleCancel();
    }
    const handleDeletedComment = () => {

        commentsDispatch({
            type: "delete_comment",
            isReply: parentId !== undefined,
            parentId,
            id
        })
    }

    const handleCancel = () => {
        setCommentState("normal");
    }
    const changeStateToEdit = () => {
        setCommentState("editing");
    }
    const changeStateToReply = () => {
        setCommentState("replying");
    }
    const changeStateToDelete = () => {
        setCommentState("deleting");
    }

    const comment_card_component = (
        <article className='comment bg-white rounded p-4 w-full'>
            <CommentHeader createdAt={createdAt} image={user.image.png} username={user.username} />
            <main className='comment_content md:ml-2 w-full p-0'>
                <CommentContent isEditing={commentState === "editing"} text={content} replyingTo={replyingTo} handleCancel={handleCancel} handleEditedComment={handleEditedComment} />
            </main>
            <CommentVotes score={score} handleVoteDecrease={handleVoteDecrease} handleVoteIncrease={handleVoteIncrease} />
            <ActionButtons changeStateToDelete={changeStateToDelete} changeStateToReply={changeStateToReply} changeStateToEdit={changeStateToEdit} commentUserName={user.username} />
            {commentState === "deleting" && <DeleteModal handleCancel={handleCancel} handleDelete={handleDeletedComment} />}
        </article>
    );

    if (commentState === "replying") {
        return (
            <>
            {comment_card_component}
            <AddComment type="reply" parentId={parentId} id={id} replyingTo={user.username} handleCancel={handleCancel} handleEditedComment={handleEditedComment} />
            </>
        )
    }

  return comment_card_component
}

export default CommentCard
