import { useState } from "react";

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
        <div key={comment.id} style={{
            display: 'flex',
            gap: '14px',
            paddingTop: isReply ? '16px' : '24px',
            paddingBottom: '24px',
            borderBottom: '1px solid #f3f4f6',
            marginLeft: isReply ? '44px' : '0'
        }}>
            {/* Avatar */}
            <img
                src={comment.image}
                alt={comment.author}
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#111827' }}>
                            {comment.author}
                        </span>
                        {isReply && (
                            <span style={{
                                marginLeft: '8px',
                                fontSize: '11px',
                                color: '#2563eb',
                                backgroundColor: '#eff6ff',
                                padding: '2px 7px',
                                borderRadius: '10px',
                                fontWeight: '600'
                            }}>Team</span>
                        )}
                        <p style={{ fontSize: '12px', color: '#9ca3af', margin: '2px 0 0' }}>{comment.date}</p>
                    </div>
                </div>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.7', margin: '0 0 12px' }}>{comment.text}</p>
                
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <button
                        onClick={() => setShowReplyForm(showReplyForm === comment.id ? null : comment.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#2563eb',
                            cursor: 'pointer',
                            fontSize: '13px',
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
                                        backgroundColor: '#2563eb',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
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
        <div style={{ marginTop: '40px' }}>
            <h4 style={{
                fontSize: '18px',
                fontWeight: '800',
                color: '#111827',
                letterSpacing: '-0.01em',
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px solid #f3f4f6'
            }}>
                {commentsData.length} {commentsData.length === 1 ? 'Comment' : 'Comments'}
            </h4>
            {commentsData.map((comment) => renderComment(comment))}
        </div>
    );
};

export default BlogComments;