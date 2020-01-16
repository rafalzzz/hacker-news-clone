export const buttons = [
    {link: '/', className: "btn btn-link p-3", onClick: 'handleChangePostsType', value: "news", text: "top", id: "1"},
    {link: '/', className: "btn btn-link p-3", onClick: 'handleChangePostsType', value: "newest", text: "new", id: "2"},
    {link: '/', className: "btn btn-link p-3", onClick: 'handleChangePostsType', value: "show", text: "show", id: "3"},
    {link: '/', className: "btn btn-link p-3", onClick: 'handleChangePostsType', value: "ask", text: "ask", id: "4"},
    {link: '/', className: "btn btn-link p-3", onClick: 'handleChangePostsType', value: "jobs", text: "jobs", id: "5"},
    {link: '/about', className: "btn btn-link float-right p-3", onClick: 'null', value: "about", text: "about", id: "6"}
]

export const commentsButtonStyles = { 
    fontSize: '14px', 
    padding: '0px', 
    marginTop: '-3px', 
    textDecoration: 'underline'
}

export const userButtonStyles = { 
    fontSize: '14px', 
    padding: '0px', 
    marginTop: '-3px', 
    textDecoration: 'underline'   
}