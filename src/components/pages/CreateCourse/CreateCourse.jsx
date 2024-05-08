import { CourseForm } from "../../Forms/CourseForm";

export function CreateCouse() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h1 className="display-4">Crea il corso:</h1>
                        <CourseForm />
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}