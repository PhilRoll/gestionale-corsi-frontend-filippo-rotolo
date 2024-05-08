import { Welcome1 } from '../../Sections/Welcome1';
import { Welcome2 } from '../../Sections/Welcome2';
import { Welcome3 } from '../../Sections/Welcome3';
export function Home() {
    return (
        <div className="container-fluid">
            <Welcome1/>
            <Welcome2/>
            <Welcome3/>
        </div>
    );
}
