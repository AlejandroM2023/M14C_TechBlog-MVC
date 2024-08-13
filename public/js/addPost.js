const addBtn = document.getElementById('addB');
const commentSection = document.getElementById('posts');



function addComment() {
    const postTitle = document.createElement('input');
    const postContent = document.createElement('textarea');

    const card = document.createElement('div');
    const cardHeader = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardFooter = document.createElement('div');
    const postSubBtn = document.createElement('button');

    card.classList.add('card');
    card.classList.add('my-3');
    card.classList.add('text-center');

    cardHeader.classList.add('card-header');

    postContent.classList.add('w-75');

    cardBody.classList.add('card-body');
    cardFooter.classList.add('card-footer');
    postSubBtn.classList.add('submit');
    postSubBtn.classList.add('btn');
    postSubBtn.innerHTML= 'Submit';
    
    card.append(cardHeader);
    cardHeader.append(postTitle);
    cardBody.append(postContent);
    card.append(cardBody);
    cardFooter.append(postSubBtn);
    card.append(cardFooter);

    commentSection.append(card);

    postSubBtn.addEventListener('click', async() => {
        const response = await fetch('/api/post',{
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: postTitle.value,
                content: postContent.value,
            })
        });
        if(response.ok){
            document.location.reload();
        }else{
            message.innerHTML ='';
                message.append('something went wrong :(');
        }
    })
        

}

addBtn.addEventListener('click', addComment);