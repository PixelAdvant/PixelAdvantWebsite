import { useState } from "react";
import { Link } from "react-router-dom";

interface Comment {
    id: number;
    author: string;
    date: string;
    image: string;
    text: string;
    replies?: Comment[];
}

const commentsData: Comment[] = [
    {
        id: 1,
        author: 'Albert Flores',
        date: 'March 20, 2025 at 2:37 pm',
        image: '/img/blogs/comment.png',
        text: 'This is excellent guidance on setting up a GCC. We\'re planning to establish our India office next quarter and this is very helpful!',
        replies: [
            {
                id: 11,
                author: 'PixelAdvant Team',
                date: 'March 20, 2025 at 4:15 pm',
                image: '/img/blogs/comment.png',
                text: 'Thank you for reading! We\'d be happy to discuss your GCC setup plans. Feel free to reach out to our team for a consultation.',
                replies: []
            }
        ]
    },
    {
        id: 2,
        author: 'Alex Flores',
        date: 'March 20, 2025 at 2:37 pm',
        image: '/img/blogs/comment-2.png',
        text: 'Great insights on recruitment strategies. We implemented some of these tactics and saw a 40% improvement in hiring efficiency.',
        replies: []
    },
];

const BlogComments = () => {
    const [expandedReplies, setExpandedReplies] = useState<number[]>([]);
    const [showReplyForm, setShowReplyForm] = useState<number | null>(null);
    const [replyData, setReplyData] = useState({ name: '', email: '', text: '' });

    const toggleReplies = (commentId: number) => {
        setExpandedReplies(prev =>
            prev.includes(commentId)
                ? prev.filter(id => id !== commentId)
                : [...prev, commentId]
        );
    };

    const handleReplySubmit = (commentId: number) => {
        if (replyData.name && replyData.email && replyData.text) {
            console.log('Reply submitted:', { commentId, ...replyData });
            setReplyData({ name: '', email: '', text: '' });
            setShowReplyForm(null);
            alert('Reply posted successfully! Thank you for your comment.');
        }
    };

    const renderComment = (comment: Comment, isReply = false) => (
        <div key={comment.id} className={`blog-single-comment d-flex gap-4 pb-5 ${isReply ? 'ms-5 mt-3' : 'pt-4'}`}>
            <div className="image">
                <img src={comment.image} alt="comment" />
            </div>
            <div className="content" style={{ flex: 1 }}>
                <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                    <div className="con">
                        <h5><Link to="/news-details">{comment.author}</Link> {isReply && <span style={{ fontSize: '12px', color: '#ff6b35' }}>• Author</span>}</h5>
                        <span>{comment.date}</span>
                    </div>
                    <div className="star">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star" />
                        ))}
                    </div>
                </div>
                <p className="mt-30 mb-4">{comment.text}</p>
                
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <button
                        onClick={() => setShowReplyForm(showReplyForm === comment.id ? null : comment.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#ff6b35',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: '600',
                            padding: '0'
                        }}
                    >
                        <i className="fa-solid fa-reply me-2" /> Reply
                    </button>

                    {comment.replies && comment.replies.length > 0 && (
                        <button
                            onClick={() => toggleReplies(comment.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#666',
                                cursor: 'pointer',
                                fontSize: '13px',
                                padding: '0'
                            }}
                        >
                            {expandedReplies.includes(comment.id) ? '- Hide' : '+ Show'} {comment.replies.length} {comment.replies.length === 1 ? 'Reply' : 'Replies'}
                        </button>
                    )}
                </div>

                {/* Reply Form */}
                {showReplyForm === comment.id && (
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '6px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{ marginBottom: '15px', fontSize: '14px', fontWeight: '600' }}>
                            <i className="fa-solid fa-reply me-2" /> Write a Reply
                        </h6>
                        <div className="row g-3">
                            <div className="col-12">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={replyData.name}
                                    onChange={(e) => setReplyData({ ...replyData, name: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '13px'
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={replyData.email}
                                    onChange={(e) => setReplyData({ ...replyData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '13px'
                                    }}
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    placeholder="Your reply..."
                                    rows={3}
                                    value={replyData.text}
                                    onChange={(e) => setReplyData({ ...replyData, text: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '8px 12px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        fontSize: '13px',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>
                            <div className="col-12" style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    onClick={() => handleReplySubmit(comment.id)}
                                    style={{
                                        padding: '8px 20px',
                                        backgroundColor: '#ff6b35',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '13px',
                                        fontWeight: '600'
                                    }}
                                >
                                    <i className="fa-solid fa-check me-2" /> Post Reply
                                </button>
                                <button
                                    onClick={() => {
                                        setShowReplyForm(null);
                                        setReplyData({ name: '', email: '', text: '' });
                                    }}
                                    style={{
                                        padding: '8px 20px',
                                        backgroundColor: '#e0e0e0',
                                        color: '#333',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '13px'
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nested Replies */}
                {expandedReplies.includes(comment.id) && comment.replies && comment.replies.length > 0 && (
                    <div style={{ marginTop: '15px' }}>
                        {comment.replies.map(reply => renderComment(reply, true))}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="comments-area">
            <div className="comments-heading">
                <h3>{commentsData.length} Comments</h3>
            </div>
            {commentsData.map((comment) => renderComment(comment))}
        </div>
    );
};

export default BlogComments;