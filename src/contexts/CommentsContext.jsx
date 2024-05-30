import { createContext, useContext, useReducer } from "react";
import {commentsData} from "../data.json"
import { getCommentsFromStorage } from "./LocalStorage";

const CommentsContext = createContext(null);

export function useCommentsContext () {
    const comments = useContext(CommentsContext);

    if (!comments) throw new Error("No comments found! Context Error!");

    return comments;
}

function commentsReducer (oldState, action) {
    const {type} = action;

    switch (type) {
        case "new_comment": {
            const {newComment} = action;
            return [...oldState, newComment]
        }
        case "new_reply": {
            const {newReply, parentId, id, isReply} = action;
            if (!isReply) {
                return oldState.map(comment => {
                    if (comment.id === id) {
                        const newReplies = [...comment.replies, newReply]
                        return {...comment, replies: newReplies}
                    } else {
                        return comment;
                    }
                })
            } else {
                return oldState.map(comment => {
                    if (comment.id === parentId) {
                        const newReplies = [...comment.replies, newReply]
                        return {...comment, replies: newReplies}
                    } else {
                        return comment;
                    }
                })
            }
        }
        case "delete_comment": {
            const {id, parentId, isReply} = action;
            
            if (!isReply) {
                return oldState.filter(comment => comment.id !== id);
            } else {
                return oldState.map(comment => {
                    if (comment.id === parentId) {
                        return {...comment, replies: comment.replies.filter(reply => reply.id !== id)};
                    } else {
                        return comment;
                    }
                })
            }
        }
        case "update_comment": {
            const {isReply, parentId, id, updatedContent} = action;

            if (!isReply) {
                return oldState.map(comment => {
                    if (comment.id === id) {
                        return {...comment, content: updatedContent}
                    } else {
                        return comment;
                    }
                })
            } else {
                return oldState.map(comment => {
                    if (comment.id === parentId) {
                        const newReplies = comment.replies.map(reply => {
                            if (reply.id === id) {
                                return {...reply, content: updatedContent}
                            } else {
                                return reply;
                            }
                        });
                        return {...comment, replies: newReplies}
                    } else {
                        return comment;
                    }
                })
            }
        }
        case "increase_score": {
            const {by, id, parentId, isReply} = action;

            if (!isReply) {
                return oldState.map(comment => {
                    if (comment.id === id) {
                        return {
                            ...comment,
                            score: comment.score + by
                        }
                    } else {
                        return comment;
                    }
                })
            } else {
                return oldState.map(comment => {
                    if (comment.id === parentId) {
                        const newReplies = comment.replies.map(reply => {
                            if (reply.id === id) {
                                return {...reply, score: reply.score + by}
                            } else {
                                return reply;
                            }
                        })
                        return {...comment, replies: newReplies}
                    } else {
                        return comment;
                    }
                })
            }
        }
        case "decrease_score": {
            const {by, id, parentId, isReply} = action;

            if (!isReply) {
                return oldState.map(comment => {
                    if (comment.id === id) {
                        return {
                            ...comment,
                            score: comment.score <= 0 ? 0 : comment.score + by
                        }
                    } else {
                        return comment;
                    }
                })
            } else {
                return oldState.map(comment => {
                    if (comment.id === parentId) {
                        const newReplies = comment.replies.map(reply => {
                            if (reply.id === id) {
                                return {
                                    ...reply,
                                    score: reply.score <= 0 ? 0 : reply.score + by
                                }
                            } else {
                                return reply;
                            }
                        })
                        return {...comment, replies: newReplies}
                    } else {
                        return comment;
                    }
                })
            }
        }
        default:
            console.log("Reducer function called!");
            break;
    }


}

const localComments = getCommentsFromStorage();

export function CommentsProvider ({children}) {
    const [comments, commentsDispatch] = useReducer(commentsReducer, localComments !== undefined ? localComments : commentsData);

    return (
        <CommentsContext.Provider value={{comments, commentsDispatch}}>
            {children}
        </CommentsContext.Provider>
    );
}