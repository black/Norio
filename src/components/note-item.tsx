interface Info{
    title:string, 
    pages:number,
    icon:string
}

const NoteItem = (props: Info) => {
    const { title, pages } = props;

    return(
        <div className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-gray-50 text-muted-foreground">
            {title}
            {pages}
            
        </div>
    )
}

export default NoteItem