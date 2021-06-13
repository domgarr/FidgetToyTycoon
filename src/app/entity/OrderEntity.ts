import { ProductEntity } from "./ProductEntity";

interface OrderEntity {
    id : number;
    personId : number;
    cart : ProductEntity[]
}