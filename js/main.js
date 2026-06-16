<script>

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const filter = this.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const text = product.textContent.toLowerCase();

        product.style.display =
            text.includes(filter) ? "block" : "none";

    });

});

const modal = document.getElementById("myModal");

document.getElementById("openModal").onclick = function () {
    modal.style.display = "block";
};

document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
};

</script>
console.log("JavaScript is connected!");
</body>
