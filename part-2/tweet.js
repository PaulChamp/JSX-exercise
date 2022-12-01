const tweet = ({username, author, date, message}) => {
return <div>
<div>{author}({username}) posted on: {date}</div>
<div>{message}</div>

</div>
};