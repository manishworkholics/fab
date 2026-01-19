import { useState } from "react";
import Modal from "../../components/Modal";
import FormModal from "../../components/Home/FormModal";
import Button from "../../components/ui/Buttons";

type WaitlistProps = {
  text?: string;
  width?: string;
  style?: string;
};
export default function WaitlistModal({ text, style, width }: WaitlistProps) {
  const [openWaitlistModal, setOpenWaitlistModal] = useState(false);

  return (
    <>
      <Button
        text={text ? text : "Join waitlist"}
        type={"button"}
        position={"center"}
        width={width ? width : ""}
        styles={style}
        handleClick={() => setOpenWaitlistModal(true)}
      />
      <Modal
        isOpen={openWaitlistModal}
        onClose={() => setOpenWaitlistModal(false)}
        style="h-[90vh]"
      >
        <FormModal />
      </Modal>
    </>
  );
}
