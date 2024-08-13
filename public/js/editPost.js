const posts = document.querySelectorAll('#post');
const message = document.getElementById('error');

function test(event){
    const post = event.target.parentElement.parentElement;
    event.target.remove();

    const title = post.children[0].innerText;
    const content = post.children[1].innerText;

    //for the title
    const titleTextArea = document.createElement('input');
    titleTextArea.value = title;

    post.children[0].innerText ='';
    post.children[0].append(titleTextArea);

    //for the content
    const contentTextArea = document.createElement('textarea');
    contentTextArea.classList.add('w-75');
    contentTextArea.value = content;

    post.children[1].innerText ='';
    post.children[1].append(contentTextArea);

    //for submit button
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit');
    submitBtn.classList.add('btn');
    submitBtn.innerHTML= 'Submit';

    post.children[2].innerText ='';
    post.children[2].append(submitBtn);

    submitBtn.addEventListener('click', async() => {
        const postId = post.dataset.postid;
        const response = await fetch('/api/post/editpost',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: parseInt(postId),
                title: titleTextArea.value,
                content: contentTextArea.value,
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


window.onload = (event) => {
    for(const post of posts){
        const button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('editBtn');
        button.innerText ='Edit';
        post.children[0].append(button);
        button.addEventListener('click',test);
    }
 };