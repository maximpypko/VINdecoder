import Skeleton from "@mui/material/Skeleton";

function VariablesSkeleton() {
  const VariablesSkeletonItems = Array.from(Array(138).keys());

  return (
    <div className="skeleton-variable">
      {VariablesSkeletonItems.map((el) => {
        return <Skeleton variant="rectangular" height={20} key={el} />;
      })}
    </div>
  );
}
export default VariablesSkeleton;
