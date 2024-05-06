import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Scopri i nostri corsi</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum quod corrupti. Autem quasi, officiis ipsa eos animi, voluptatum quod fugiat alias, dignissimos accusamus dolores molestias error expedita veritatis esse!.</p>
                <Link to="/courses" className="btn btn-primary">Vai ai Corsi</Link>
            </div>
        </div>
    );
}