<script>
    // Check if login success flag exists in URL
    const params = new URLSearchParams(window.location.search);

    if (params.get("login") === "success") {
        alert("Login Successful!");
    }
</script>