import { useParams } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import  Row  from "../../components/Row";
import CatCard from "../../components/CatCard";
import useCategoryAxiosApi from "../../axiosCustomHooks/useCategoryAxiosApi";

export default function AxiosCategory() {
    // Önce categoryName'i alıyoruz
    const { categoryName } = useParams();

    // Sonra useCategoryFetchApi'yi çağırıyoruz
    const [data, isLoading, isError, error] = useCategoryAxiosApi(categoryName);

    console.log(data);

    if (isLoading) return <LoadingComponent />;
    if (isError) return <div>Error: {error}</div>;

    return (
        <div className="col-sm-12">
            <h1>Fetch Name: {categoryName}</h1>
            <Row className="row-cols-sm-3">
                {/* data.map içinde JSX'i düzgün kapatın */}
                {data.map((item) => (
                    <CatCard key={item.id} imgSrc={item.url} />
                ))}
            </Row>
        </div>
    );
}