import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";

const ResetButton = ({ resetFn }: { resetFn: () => void }) => {
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <button
            type="button"
            className="bg-app-secondary rounded-[18px] text-app-primary p-5 size-fit"
          >
            Resetiraj
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Resetiraj</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Ste prepričani, da želite resetirati celotno formo. To bo izbrisalo
            vse podatke, ki ste jih vnesli.
          </AlertDialog.Description>
          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Prekliči
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={resetFn}>
                Resetiraj
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default ResetButton;
