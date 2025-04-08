import {
  Title,
  TextInput,
  Group,
  Box,
  Stack,
  Button,
  ScrollArea,
} from "@mantine/core";
import WizardButton from "../../components/WizardButton";
import { ArrowLeft } from "lucide-react";

interface VehicleDetails2Props {
  onBack: () => void;
  onNext: () => void;
}

const VehicleDetails2 = ({ onBack, onNext }: VehicleDetails2Props) => {
  return (
    <Box style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Group mb="md">
        <Button
          variant="subtle"
          leftSection={<ArrowLeft size={16} />}
          onClick={onBack}
        >
          Back
        </Button>
      </Group>

      <ScrollArea style={{ flex: 1 }} px="md">
        <Title
          order={3}
          style={{
            marginBottom: "1.5rem",
            color: "#2c3e50",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Additional Vehicle Details
        </Title>

        <Stack gap="lg" pb="xl">
          <TextInput
            label="Plate Number"
            placeholder="Enter plate number"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
          <TextInput
            label="Chassis Number"
            placeholder="Enter chassis number"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
          <TextInput
            label="Engine Number"
            placeholder="Enter engine number"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
          <TextInput
            label="Make (Company)"
            placeholder="Enter vehicle make"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
          <TextInput
            label="Model"
            placeholder="Enter vehicle model"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
          <TextInput
            label="Engine Capacity (CC)"
            placeholder="Enter engine capacity"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
          <TextInput
            label="Year of Manufacture"
            placeholder="Enter year of manufacture"
            radius="xl"
            size="md"
            styles={{ label: { marginBottom: 4 } }}
          />
        </Stack>
      </ScrollArea>

      <Group grow p="md" style={{ flexShrink: 0 }}>
        <WizardButton variant="back" onClick={onBack} />
        <WizardButton variant="next" onClick={onNext} />
      </Group>
    </Box>
  );
};

export default VehicleDetails2;
