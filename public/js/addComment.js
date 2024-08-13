const addBtn = document.getElementById('addB');
const commentSection = document.getElementById('commentSection');
const message = document.getElementById('errors');



function addComment() {
    const textBox = document.createElement('textarea');
    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardFooter = document.createElement('div');
    const submitBtn = document.createElement('button');

    card.classList.add('card');
    card.classList.add('text-center');
    cardHeader.classList.add('card-header');
    textBox.classList.add('w-75');
    cardBody.classList.add('card-body');
    cardFooter.classList.add('card-footer');
    submitBtn.classList.add('submit');
    submitBtn.classList.add('btn');
    submitBtn.innerHTML= 'Submit';
    
    card.append(cardHeader);
    cardBody.append(textBox);
    card.append(cardBody);
    cardFooter.append(submitBtn);
    card.append(cardFooter);

    commentSection.append(card);

    submitBtn.addEventListener('click', async() => {
        const postId = document.getElementById('post').dataset.postid;
        if(textBox.value){
            const response = await fetch('/api/post/addcomment',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    content: textBox.value,
                    author: '',
                    post_id: parseInt(postId)
                })
            })
            if(response.ok){
                message.innerHTML ='';
                message.append('thanks for the comment');
                card.remove();
                document.location.reload();
            }else{
                message.innerHTML ='';
                message.append('something went wrong :(');
            }
        }else{
            message.innerHTML ='';
            message.append('please fill comment before submitting');
        }
    });

}

addBtn.addEventListener('click', addComment);