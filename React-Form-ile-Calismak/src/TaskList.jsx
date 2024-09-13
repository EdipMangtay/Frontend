export default function TaskList({ tasks, removeTask ,editTask}) {
    // Eğer tasks dizisi boşsa, boş bir fragment döndürür (hiçbir şey render etmez)
    if (tasks.length === 0) {
        return <></>;
    }

    return (
        <>
        <div className="p-4 bg-light mb-5 border rounded">
            <p className="lead">Görevler</p>
            <ul className="list-group ">
                {tasks.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        {/* item kullanarak task bilgisine ulaşılmalı */}
                        {item.task} {item.priority ? " - Öncelikli" : ""}
                        {/* Sil butonu */}
                        <span className="btn btn-sm btn-danger float-end" onClick={() => removeTask(item.id)}>
                            Sil
                        </span>
                        <span className="btn btn-sm btn-info float-end"
                        onClick={() => editTask(item.id)}
                        >
                            Düzenle
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
}