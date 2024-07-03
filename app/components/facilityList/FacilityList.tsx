import { FC } from "react";
import { Grid, Box } from "@mui/material";
import MainContainer from "components/shared/MainContainer";
import { mainSpacingXStyle } from "components/shared/mainStyles";
import ResultLayout from "./ResultLayout";

const facilityListStyle = {
  px: { ...mainSpacingXStyle },
  pt: { xs: 3, sm: 2.5, md: 4 },
  pb: 5,
};

interface Props {
  data?: any;
}

const FacilityList: FC<Props> = (props) => {
  const { data } = props;
  return (
    <MainContainer>
      <Grid>
        <Box sx={facilityListStyle}>
          <Grid container>
            <Grid item md={9} xs>
              <ResultLayout data={data} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </MainContainer>
  );
};

export default FacilityList;
