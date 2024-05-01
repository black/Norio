import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable" 
  
  import Editor from '@/components/Editor'; 
  import Note from '@/components/note-item';
  import { SiteHeader } from "@/components/site-header";


  interface Note{
    id:number,
    title:string, 
    pages:number
  } 

  async function getNotes():Promise<Note[]> {
    const result = await fetch('http://localhost:4000/components')
    return result.json()
  }

  const home = async () => { 
    const notes = await getNotes();
    return(
       <main className="h-screen flex flex-col">  
       <SiteHeader />  
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="h-full max-w-md">  
               <ul className="grid grid-flow-row auto-rows-max text-sm h-full overflow-y-auto bg-muted">
                {
                  notes.map(note=>(
                    <Note
                      key={note.id}
                      title={note.title}
                      pages={note.pages}
                    /> 
                  ))
                }
               </ul>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel> 
              {/* <Editor /> */}
            </ResizablePanel>
        </ResizablePanelGroup>
       </main>
    ) 
  }

  export default home
 