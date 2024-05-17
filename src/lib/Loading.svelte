<div></div>


<style>
    div {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(215,157,64,1);
        background-image: linear-gradient(90deg, rgba(215,157,64,1) 0%, rgba(252,252,252,1) 35%, rgba(215,157,64,1) 100%);
        background-size: 400% 400%;
	    animation: gradient 5s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>