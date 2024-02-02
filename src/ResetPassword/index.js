import Typography from "../Elements/Typography";
import Box from "../Elements/Box";
import Label from "../Elements/Label";
import Input from "../Elements/Input";
import Button from "../Elements/Button";
export default function ResetPassword() {
  return (
    <Box className=" text-[#00000000]  max-w-[1200px]  bg-[white]  w-[100vw]  sm:p-[0.8rem] md:p-[0.8rem]   flex  flex-col  gap-y-[3rem] md:gap-y-[1.8rem] sm:gap-y[0.8rem]">
      <Box className=" w-[100%]">
        <Typography className=" flex  text-[24px]  font-rubik  text-[black]  w-[fit-content]">
          Change password
        </Typography>
        <Typography className=" text-[#89909aff]  font-rubik  text-[16.5px]  w-[100%]">
          Choose a strong password and don't reuse it for other accounts.
          Changing your password will sign you out of all your devices,
          including your phone. You will need to enter your new password on all
          your devices
        </Typography>
      </Box>
      <Box className=" max-w-[450px] sm:w-full md:w-[450px]  flex  flex-col  gap-y-[1rem]">
        <Box className=" w-[100%]  flex  flex-col  gap-y-[10px]">
          <Label className=" flex  text-[black]  font-[700]  text-[17px]  font-rubik  w-[fit-content]">
            Old password
          </Label>
          <Input
            className=" bg-[None]  text-[#89909aff]  font-rubik  text-[15px]  p-[15px]  w-[100%] border-[1px] border-solid border-gray-200"
            placeholder="Old password"
          ></Input>
        </Box>
        <Box className=" w-[100%]  flex  flex-col  gap-y-[10px]">
          <Label className=" flex  text-[black]  font-[700]  text-[17px]  font-rubik  w-[fit-content]">
            New password
          </Label>
          <Input
            className=" bg-[None]  text-[#89909aff]  font-rubik  text-[15px]  p-[15px]  w-[100%] border-[1px] border-solid border-gray-200"
            placeholder="At least 8 characters"
          ></Input>
        </Box>
        <Box className=" w-[100%]  flex  flex-col  gap-y-[10px]">
          <Label className=" flex  text-[black]  font-[700]  text-[17px]  font-rubik  w-[fit-content]">
            Confirm new password
          </Label>
          <Input
            className=" bg-[None]  text-[#89909aff]  font-rubik  text-[15px]  p-[15px]  w-[100%] border-[1px] border-solid border-gray-200"
            placeholder="Confirm password"
          ></Input>
        </Box>
        <Button className=" bg-[#68d0d0ff]  text-[#ffffffff]  cursor-pointer  flex  rounded-[4px]  py-[14px]  px-[55px]  justify-center">
          <Typography className=" text-[#ffffffff]  block  font-rubik  font-[600]">
            Change password
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
