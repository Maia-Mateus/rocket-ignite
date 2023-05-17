import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({ content, onDeleteComment }){

    function handleDeleComment(){
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/131715627?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header >  
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Maia</strong>
                            <time tittle="6 de maio ás 15:54h" dateTime='2023-05-06 15:54:00'>Cerca de 1h atrás</time>
                        </div>
                        
                        <button onClick={handleDeleComment} tittle="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
            
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
            </div>

        </div>
    )
}