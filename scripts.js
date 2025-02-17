document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Tilechem Copper',
            description: 'High-performance non-skid adhesive for tiles and stones. Provides excellent bonding strength and is suitable for both indoor and outdoor applications.',
            image: 'Images/tilchem-copper.JPEG'
        },
        {
            name: 'Tilechem Silver',
            description: 'Specially formulated adhesive for vitrified tiles. Ensures strong adhesion and durability, ideal for use in high-traffic areas.',
            image: 'Images/tilchem-copper.JPEG'
        },
        {
            name: 'Tilechem Gold',
            description: 'Ideal adhesive for new construction projects. Offers superior bonding for various types of tiles and stones, ensuring long-lasting performance.',
            image: 'Images/tilchem-copper.JPEG'
        },
        {
            name: 'Tilechem Diamond',
            description: 'Versatile adhesive for various types of tiles and stones. Provides reliable bonding and is easy to apply, making it perfect for DIY projects.',
            image: 'Images/tilchem-copper.JPEG'
        }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        productElement.addEventListener('click', () => {
            document.getElementById('popup-title').textContent = product.name;
            document.getElementById('popup-description').textContent = product.description;
            document.getElementById('product-popup').style.display = 'block';
        });
        productList.appendChild(productElement);
    });

    // Navigate to home section on logo click
    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = '#home';
    });

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const productElements = document.querySelectorAll('.product');

        productElements.forEach(productElement => {
            const productName = productElement.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                productElement.style.display = 'flex';
            } else {
                productElement.style.display = 'none';
            }
        });
    });

    // Close product popup
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.style.display = 'none';
        });
    });

    // Open inquiry popup
    document.getElementById('message-icon').addEventListener('click', () => {
        document.getElementById('inquiry-popup').style.display = 'block';
    });

    // Close inquiry popup
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.style.display = 'none';
        });
    });

    // Submit inquiry form
    document.getElementById('inquiry-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('inquiry-name').value;
        const email = document.getElementById('inquiry-email').value;
        const message = document.getElementById('inquiry-message').value;
        window.location.href = `mailto:info@coastalbuildchem.com?subject=Product Inquiry&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    });
});